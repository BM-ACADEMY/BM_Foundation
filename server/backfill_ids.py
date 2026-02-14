import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bm_foundation_backend.settings')
django.setup()

from bm_foundation_backend.mongo import db
import datetime

license_collection = db['licenses']

# Count total records
total = license_collection.count_documents({})
print(f'Total records in database: {total}')

# Get records without volunteer_id
records_without_id = list(license_collection.find({"volunteer_id": {"$exists": False}}))
print(f'Records without volunteer_id: {len(records_without_id)}')

if records_without_id:
    current_year = datetime.date.today().year
    year_prefix = f'BMF-{current_year}-'
    count = license_collection.count_documents({"volunteer_id": {"$regex": f"^{year_prefix}"}})
    
    for i, record in enumerate(records_without_id):
        volunteer_id = f'BMF-{current_year}-{count + i + 1:03d}'
        license_collection.update_one(
            {"_id": record["_id"]},
            {"$set": {"volunteer_id": volunteer_id}}
        )
        print(f'  ✓ {record.get("full_name", "Unknown")} → {volunteer_id}')
    
    print(f'\n✅ Successfully assigned IDs to {len(records_without_id)} records')
else:
    print('✅ All records already have volunteer_id')

# Show sample
print('\nSample records:')
for record in license_collection.find().limit(3):
    print(f'  - {record.get("full_name")}: {record.get("volunteer_id", "MISSING")}')

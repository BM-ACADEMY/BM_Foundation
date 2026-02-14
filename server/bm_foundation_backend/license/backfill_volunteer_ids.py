#!/usr/bin/env python
"""
Backfill volunteer_id for existing MongoDB records
"""
import os
import sys
from pathlib import Path

# Add project root to path
BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(BASE_DIR))

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bm_foundation_backend.settings')
import django
django.setup()

from bm_foundation_backend.mongo import db
import datetime

def backfill_volunteer_ids():
    """Generate and assign volunteer_id to all existing records"""
    license_collection = db["licenses"]
    
    # Get all records without volunteer_id
    records_without_id = list(license_collection.find({"volunteer_id": {"$exists": False}}))
    
    if not records_without_id:
        print("✅ All records already have volunteer_id")
        return
    
    print(f"📝 Found {len(records_without_id)} records without volunteer_id")
    
    current_year = datetime.date.today().year
    year_prefix = f"BMF-{current_year}-"
    
    # Get the current count for this year
    count = license_collection.count_documents({"volunteer_id": {"$regex": f"^{year_prefix}"}})
    
    updated = 0
    for record in records_without_id:
        count += 1
        volunteer_id = f"BMF-{current_year}-{count:03d}"
        
        # Ensure uniqueness
        while license_collection.find_one({"volunteer_id": volunteer_id}):
            count += 1
            volunteer_id = f"BMF-{current_year}-{count:03d}"
        
        # Update the record
        license_collection.update_one(
            {"_id": record["_id"]},
            {"$set": {"volunteer_id": volunteer_id}}
        )
        updated += 1
        print(f"  ✓ {record.get('full_name', 'Unknown')} → {volunteer_id}")
    
    print(f"\n✅ Successfully assigned IDs to {updated} records")

if __name__ == "__main__":
    backfill_volunteer_ids()

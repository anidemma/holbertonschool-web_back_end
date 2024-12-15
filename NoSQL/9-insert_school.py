#!/usr/bin/env python3
"""Insert a document in Python"""


def insert_school(mongo_collection, **kwargs):
    """Insert a document in Python"""
    return mongo_collection.insert_one(kwargs).inserted_id

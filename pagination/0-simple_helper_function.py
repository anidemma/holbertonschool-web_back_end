#!/usr/bin/env python3
"""Simple helper function"""


def index_range(page, page_size)-> tuple:
    """Simple helper function"""
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)

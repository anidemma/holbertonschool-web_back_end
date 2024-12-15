#!/usr/bin/env python3
"""Run time for four parallel comprehensions"""
import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Run time for four parallel comprehensions"""
    load = [async_comprehension() for i in range(10)]
    start = time.perf_counter()
    await asyncio.gather(*load)
    end = time.perf_counter()
    return end - start

#!/usr/bin/env python3
"""Let's execute multiple coroutines at the same time with async"""
import typing
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> typing.List[float]:
    """Let's execute multiple coroutines at the same time with async"""
    delays: typing.List[float] = []
    all_delays: typing.List[float] = []
    for i in range(n):
        delays.append(wait_random(max_delay))
    for delay in asyncio.as_completed(delays):
        min_result = await delay
        all_delays.append(min_result)
    return all_delays

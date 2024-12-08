#!/usr/bin/env python3
"""Let's duck type an iterable object"""
from typing import List, Iterable, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Let's duck type an iterable object"""
    return [len(element) for element in lst]

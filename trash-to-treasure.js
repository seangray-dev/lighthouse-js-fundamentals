const smartGarbage = (trash, bins) => {
  const smartGarbageResult = bins;
  if (trash === "waste") {
    bins.waste += 1;
  } else if (trash === "recycling") {
    bins.recycling += 1;
  } else if (trash === "compost") {
    bins.compost += 1;
  }

  return smartGarbageResult;
};

smartGarbage("waste", { waste: 5, recycling: 2, compost: 5 });

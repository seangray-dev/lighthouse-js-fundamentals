const checkAir = (samples, threshold) => {
  let cleanAir = 0;
  let dirtyAir = 0;

  // iterate through the samples array
  for (const sample of samples) {
    if (sample === "dirty") {
      dirtyAir++;
    } else {
      cleanAir++;
    }
  }

  // Determine whether the sample is polluted or clean
  const percentOfDirtyAir = dirtyAir / samples.length;

  return percentOfDirtyAir > threshold ? "Polluted" : "Clean";
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);

# Flock of Sheep

## Outline of the problem

The problem posed is an example of **vector quantization**: given a population on `n` items we need to determine the extent to which those items form clusters.

## Potential solutions

There are several algorithms that could be applied to a problem like this:
- **K-means clustering**
- **DBSCAN** (Density-Based Spatial Clustering of Applications with Noise)
- **OPTICS** (Ordering Points To Identify the Clustering Structure)
- **Gaussian Mixture Model**

## Suggested solution

The solution that came up most frequently during my searches was **k-means clustering**. It seems to be a widely-used algorithm with a straightforward methodology so I am proposing that as a potential solution.

### Implementation steps

1. Identify initial *centroids*. These could be sheep that appear, from a visual analysis, to form the centre of groups. Or they could be simply randomly selected.
2. Using Euclidean distance, add each sheep to its nearest centroid’s cluster
    - Euclidean distance is the 'as the crow flies' distance between sheep
    - Probably calculated as the hypotenuse of a right-angled triangle whose non-right angle corners sit on the locations of the sheep in question
3. For each cluster, recalculate its centroid by taking the mean of coordinates in that cluster

Repeat steps 2 & 3 until centroids don't change appreciably between iterations.

At the end of the process, the number of centroids indicates the number of groups of sheep.

### Advantages of this strategy

- k-means is commonly used and well understood
- it can be implemented with open-source packages in many languages, including Python, C#, C++, Julia, R
- although NP-Hard (see disadvantages below) it runs quickly and can be iteratively refined to give a good estimation.

### Disadvantages

- it is computationally difficult (an NP-Hard problem) though that is probably not a big issue when the maximum value of `n` is likely to be just a few thousand at the most, as with our sheep problem.
- it tends to find similarly-sized and shaped clusters

### What can go wrong?

Of the disadvantages listed above, the second is likely to have the most impact. Sheep tend not to gather in similarly-sized groups, so the result could be misleading.

Also, sheep move so the result will need to be constantly updated.

### Wider considerations

The *k-means* algorithm (in fact any vector quantization algorithm) groups items based on their location in relation to each other. That might not be the most appropriate way to categorise sheep. Perhaps they need to be categorised by age, gender, breed or immunisation status.
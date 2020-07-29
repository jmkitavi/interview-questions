// Task 2
// consolidating partitions

const minPartitions = (used, totalCapacity) => {
  let partitions = 0
  let usedPartitions = used.length
  let partitionData = []

  // get partitionData [used, total, unused]
  for (let i = 0; i < usedPartitions; i++) {
    partitionData[i] = []
    partitionData[i][0] = used[i]
    partitionData[i][1] = totalCapacity[i]
    partitionData[i][2] = totalCapacity[i] - used[i]
  }


  partitionData.sort((a,b) => (a[2] == b[2]) ? (a[0]-b[0]) : (a[2]-b[2]))

  // traverse sorted partitionData
  let left = 0
  let right = usedPartitions - 1
  while (left < right) {
    if (partitionData[left][0] <= partitionData[right][2] ) {
      partitionData[right][2] = partitionData[right][2] - partitionData[left][0]
      partitionData[left][0] = 0
      partitionData[left][2] = partitionData[left][1]
      left++

      if (partitionData[right][2] == 0) {
        right--
        partitionData[right][0] = partitionData[right][1]
      }
    } else {
      partitionData[left][0] = partitionData[left][0] - partitionData[right][2]
      partitionData[left][2] = partitionData[left][1] - partitionData[left][0]
      partitionData[right][2] = 0
      partitionData[right][0] = partitionData[right][1]
      right--
    }
  }

  for ( let i = 0; i < usedPartitions; i++ ) {
    if ( partitionData[i][2] == 0 ) {
      partitions++
    }
  }

  return partitions
}
  
  
console.log(minPartitions([3, 2, 1, 3, 1], [3, 5, 3, 5, 5])) // should return 2
  
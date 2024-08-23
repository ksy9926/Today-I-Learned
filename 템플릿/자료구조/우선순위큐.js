// 일반 우선순위 큐
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

// MinHeap 우선순위 큐
class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this.heap[0];
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  enqueue(value) {
    this.heap.push(value);
    let index = this.size() - 1;
    let parentIdx = Math.floor((index - 1) / 2);

    // console.log('index: ', index);
    // console.log('parentIdx: ', parentIdx);
    console.log('this.heap[index]: ', this.heap[index]);
    console.log('this.heap[parentIdx]: ', this.heap[parentIdx]);
    while (parentIdx >= 0 && this.heap[index] < this.heap[parentIdx]) {
      this.swap(index, parentIdx);
      index = parentIdx;
      parentIdx = Math.floor((index - 1) / 2);
    }
  }

  dequeue() {
    const value = this.heap[0];
    this.heap[0] = this.heap.pop();

    let index = 0;

    while (index < this.heap.size()) {
      let smallerChildIdx = index * 2 + 1;
    }

    return value;
  }

  print() {
    console.log(this.heap);
  }
}

const heap = new MinHeap();
console.log(heap.size());
heap.enqueue(7);
heap.print();
heap.enqueue(3);
heap.print();
heap.enqueue(5);
heap.print();
heap.enqueue(6);
heap.print();
heap.enqueue(11);
heap.print();
heap.enqueue(10);
heap.print();
heap.enqueue(12);
heap.print();
heap.enqueue(13);
heap.print();
heap.enqueue(1);
heap.print();

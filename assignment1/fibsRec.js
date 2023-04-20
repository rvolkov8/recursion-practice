function fibsRec(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else {
    let fibSeq = fibsRec(n - 1);
    fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]);
    return fibSeq;
  }
}

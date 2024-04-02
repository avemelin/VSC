function pow2() {
    this.x *= this.x;
  }
  const a = {x: 10};
  aPow2 = pow2.bind(a);
  
  const b = {x: 20};
  bPow2 = aPow2.bind(b);
  
  aPow2();
  bPow2();
  
  console.log(a.x, b.x);
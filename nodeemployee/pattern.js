

    let N = 4;
    //let a=[];

    for (let i = 0; i < 2 * N - 1; i++) {
        let k = i < N ? i : 2 * (N - 1) - i; 

        for (let j = 0; j < k; j++)
           console.log(N - j);

        for (let j = 0; j < 2 * (N - k) - 1; j++)
        console.log(N - k);

        for (let j = k - 1; j >= 0; j--)
       
        console.log(N - j);

  }


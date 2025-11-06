function fibRec(n){
    if(n==0) return [];
    if(n==1) return [0];
    if(n==2) return [0,1];
    let prev = fibRec(n-1);
    let next = prev[prev.length-1]+prev[prev.length-2];
    return [...prev,next]
}

function mergeSort(n){
    if (n.length == 1 || n.length ==0) return n;
    let mid = n.length/2;
    let left = mergeSort(n.slice(0,mid));
    let right = mergeSort(n.slice(mid));
    return merge(left,right);
}

function merge(a,b){
    if (a.length == 0){return b};
    if (b.length == 0){return a};
    if(a[0]<b[0]){
        return [a[0],...merge(a.slice(1),b)]
    } else 
        return [b[0],... merge(a,b.slice(1))]
}
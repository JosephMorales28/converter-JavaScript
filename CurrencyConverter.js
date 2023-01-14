function main() {
    var amount = parseFloat(readLine(), 10);
    var rate = parseFloat(readLine(), 10);
    
    function convert(a,b){
        return a*b;
    }
    console.log(convert(amount, rate));
}

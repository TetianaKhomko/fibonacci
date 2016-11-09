var i;
var fib = []; //initialize array;

fib[0] = 0;
fib[1] = 1;
for(i = 2; i <= 10; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    alert(fib[i]);
}
    
    
    var fib = function(n) {
        var a = 0, b = 1, f = 1;
        for(var i = 2); i <= n; i++) {
            f = a + b;
            a = b;
            b = f;
        }
        return f;
    }
    
    
    
    //recursive;
    function fibonacci(number)
    {
        if (number <= 0) {
            return 0;
        } else if (number === 1)
        {
            return 1;
        } else {
            //f(n) = f(n - 1) + f(n - 2)
            return fibonacci(number - 1) + fibonacci(number - 2);
        }
        
    }
const a=0;// 
if(a)//JS always take true the initial value.but if it is 0 it consider its a false.
{
    console.log(' True');
}
else
{
    console.log('False');
}

const name='Istiyak';// if initially i took string and set condition it take always true but if i take empty string it shows false.
if(name)// we can also write name.length>0 or name>0;
{
    console.log(' True');
}
else
{
    console.log('False');
}\
//**** Falsy
//Again if value is undefine Js consider it false.
//if we define value is null JS consider it false.
//if we define value is 0 JS consider it false.
//if we define value is '' JS consider it false.
//if we define value is NAN JS consider it false.
//if we define value is false JS consider it false.

//****truly */
//**** Empty array is true */
//Empty Object is true.
//'0' it true
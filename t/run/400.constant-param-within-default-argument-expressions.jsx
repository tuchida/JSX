/*EXPECTED
1
1
*/
class _Main {

    static function fn(a : number, b : () => number = () => a) : void {
        log b();
        a = 10;
        log b();
    }

    static function main(args : string[]) : void {
        _Main.fn(1);
    }
}

/*EXPECTED
f1
2
2
f1
10
20
f2
2
2
*/
class _Main {
	static function f1(a : number, b : number = ++a) : void {
		log "f1";
		log a;
		log b;
	}

	static function f2(a : number, b : () => number = () => ++a) : void {
		log "f2";
		log b();   // expect 2
		log a;     // expect 2 but 1
	}

	static function main(args : string[]) : void {
		_Main.f1(1);
		_Main.f1(10, 20);

		_Main.f2(1);
	}
}
// vim: set expandtab tabstop=2 shiftwidth=2 ft=jsx:

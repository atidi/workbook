import {Router} from "@angular/router";

export class Utils {
  private rout: Router;
  constructor(private router: Router){
    this.rout = router;
  }
  backToList(){
    this.rout.navigate(["/workbook"])
  }
}

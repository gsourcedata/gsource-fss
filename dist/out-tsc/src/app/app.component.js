import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'gsource-fs';
        this.userReg = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.profile().subscribe(function (user) {
            _this.userReg = user.roles;
            console.log('appcomponrt Userrrrrrrrrrrr111', _this.userReg);
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthenticationService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map
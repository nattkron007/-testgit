"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var ProvinceService = /** @class */ (function () {
    function ProvinceService(http, router) {
        this.http = http;
        this.router = router;
    }
    ProvinceService.prototype.calprovince = function () {
        //ip computer use ipconfig in cmd ipv4
        var apiUrl = "http://10.4.101.103:3000/province";
        return this.http.get(apiUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleErrors);
    };
    //function other
    ProvinceService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    ProvinceService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            router_1.Router])
    ], ProvinceService);
    return ProvinceService;
}());
exports.ProvinceService = ProvinceService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmluY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb3ZpbmNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsMENBQXlDO0FBQ3pDLHNDQUF5RjtBQUN6Riw4QkFBcUM7QUFHckM7SUFDSSx5QkFDWSxJQUFVLEVBQ1YsTUFBYztRQURkLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3RCLENBQUM7SUFDTCxxQ0FBVyxHQUFYO1FBQ0ksc0NBQXNDO1FBQ3RDLElBQUksTUFBTSxHQUFHLG1DQUFtQyxDQUFDO1FBRWpELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDaEIsTUFBTSxDQUNUO2FBQ0EsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFQyxnQkFBZ0I7SUFDbEIsc0NBQVksR0FBWixVQUFhLEtBQWU7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQXBCUSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7eUNBR1MsV0FBSTtZQUNGLGVBQU07T0FIakIsZUFBZSxDQXFCM0I7SUFBRCxzQkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSGVhZGVycywgSHR0cCwgUmVzcG9uc2UsIFJlcXVlc3RPcHRpb25zLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQcm92aW5jZVNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcclxuICAgICkgeyB9XHJcbiAgICBjYWxwcm92aW5jZSAoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICAvL2lwIGNvbXB1dGVyIHVzZSBpcGNvbmZpZyBpbiBjbWQgaXB2NFxyXG4gICAgICAgIGxldCBhcGlVcmwgPSBcImh0dHA6Ly8xMC40LjEwMS4xMDM6MzAwMC9wcm92aW5jZVwiO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcclxuICAgICAgICAgICAgYXBpVXJsXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgICB9XHJcblxyXG4gICAgICAvL2Z1bmN0aW9uIG90aGVyXHJcbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgfVxyXG59Il19
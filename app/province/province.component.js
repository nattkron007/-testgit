"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var province_service_1 = require("./province.service");
var provinceComponent = /** @class */ (function () {
    function provinceComponent(ProvinceService) {
        this.ProvinceService = ProvinceService;
        this.listProvince = [];
        this.myList = [];
    }
    provinceComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        var searchValue = searchBar.text.toLowerCase();
        this.myList = [];
        if (searchValue !== "") {
            for (var i = 0; i < this.listProvince.length; i++) {
                if (this.listProvince[i].province.toLowerCase().indexOf(searchValue) !== -1) {
                    this.myList.push(this.listProvince[i]);
                }
            }
        }
        else {
            this.myList = this.listProvince;
        }
    };
    provinceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ProvinceService.calprovince()
            .subscribe(function (Response) {
            _this.listProvince = Response;
            _this.myList = _this.listProvince;
            console.log(JSON.stringify(Response));
        }, function (error) {
            // error
            alert("province Error");
        });
    };
    provinceComponent = __decorate([
        core_1.Component({
            selector: "province",
            templateUrl: "province.component.html",
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [province_service_1.ProvinceService])
    ], provinceComponent);
    return provinceComponent;
}());
exports.provinceComponent = provinceComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmluY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvdmluY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHVEQUFxRDtBQVFyRDtJQUdJLDJCQUNZLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUg1QyxpQkFBWSxHQUFHLEVBQUUsQ0FBQTtRQUNqQixXQUFNLEdBQUcsRUFBRSxDQUFBO0lBS1gsQ0FBQztJQUNNLG9DQUFRLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQUksV0FBVyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsRUFBRSxDQUFDLENBQUMsV0FBVyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNoRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFBO1FBQ25DLENBQUM7SUFDTCxDQUFDO0lBQ0Qsb0NBQVEsR0FBUjtRQUFBLGlCQWNDO1FBYkcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUU7YUFDakMsU0FBUyxDQUNOLFVBQUMsUUFBUTtZQUNMLEtBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFBO1lBQzVCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQTtZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDLEVBQ0QsVUFBQyxLQUFLO1lBQ0YsUUFBUTtZQUNSLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FFSixDQUFDO0lBQ04sQ0FBQztJQXJDUSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3RCLENBQUM7eUNBTStCLGtDQUFlO09BSm5DLGlCQUFpQixDQXNDNUI7SUFBRCx3QkFBQztDQUFBLEFBdENGLElBc0NFO0FBdENXLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUHJvdmluY2VTZXJ2aWNlIH0gZnJvbSBcIi4vcHJvdmluY2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInByb3ZpbmNlXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwcm92aW5jZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIHByb3ZpbmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGxpc3RQcm92aW5jZSA9IFtdXHJcbiAgICBteUxpc3QgPSBbXVxyXG4gICAgY29uc3RydWN0b3IgKFxyXG4gICAgICAgIHByaXZhdGUgUHJvdmluY2VTZXJ2aWNlOiBQcm92aW5jZVNlcnZpY2VcclxuICAgICkge1xyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBvblN1Ym1pdChhcmdzKSB7XHJcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgbGV0IHNlYXJjaFZhbHVlID0gc2VhcmNoQmFyLnRleHQudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5teUxpc3QgPSBbXTtcclxuICAgICAgICBpZiAoc2VhcmNoVmFsdWUgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RQcm92aW5jZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdFByb3ZpbmNlW2ldLnByb3ZpbmNlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hWYWx1ZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teUxpc3QucHVzaCh0aGlzLmxpc3RQcm92aW5jZVtpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm15TGlzdCA9IHRoaXMubGlzdFByb3ZpbmNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbmdPbkluaXQgKCkge1xyXG4gICAgICAgIHRoaXMuUHJvdmluY2VTZXJ2aWNlLmNhbHByb3ZpbmNlKClcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAoUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFByb3ZpbmNlID0gUmVzcG9uc2VcclxuICAgICAgICAgICAgICAgIHRoaXMubXlMaXN0ID0gdGhpcy5saXN0UHJvdmluY2VcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KFJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gZXJyb3JcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwicHJvdmluY2UgRXJyb3JcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuIH1cclxuIl19
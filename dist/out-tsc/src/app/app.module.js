"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var router_1 = require("@angular/router");
var filter_pipe_1 = require("./image-detail/shared/filter.pipe");
var image_service_1 = require("./image-detail/shared/image.service");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./navbar/navbar.component");
var gallery_component_1 = require("./gallery/gallery.component");
var image_detail_component_1 = require("./image-detail/image-detail.component");
var routes_1 = require("../routes");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                gallery_component_1.GalleryComponent,
                image_detail_component_1.ImageDetailComponent,
                filter_pipe_1.FilterPipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                ng2_bootstrap_1.AlertModule.forRoot(),
                router_1.RouterModule.forRoot(routes_1.appRoutes)
            ],
            providers: [image_service_1.ImageService, filter_pipe_1.FilterPipe],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
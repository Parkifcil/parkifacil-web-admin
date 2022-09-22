import { Component, Inject, LOCALE_ID, Renderer2 } from "@angular/core";
import { ConfigService } from "../@vex/services/config.service";
import { Settings } from "luxon";
import { DOCUMENT } from "@angular/common";
import { Platform } from "@angular/cdk/platform";
import { NavigationService } from "../@vex/services/navigation.service";
import { LayoutService } from "../@vex/services/layout.service";
import { ActivatedRoute } from "@angular/router";
import { filter, map } from "rxjs/operators";
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { SplashScreenService } from "../@vex/services/splash-screen.service";
import { Style, StyleService } from "../@vex/services/style.service";
import { ConfigName } from "../@vex/interfaces/config-name.model";
// ICONOS
import icLayers from "@iconify/icons-ic/twotone-layers";
import icCatClientes from "@iconify/icons-ic/baseline-supervised-user-circle";
import icIngresos from "@iconify/icons-ic/monetization-on";
import icEgresos from "@iconify/icons-ic/local-atm";
import icLicencias from "@iconify/icons-ic/phone-iphone";
import icRecargas from "@iconify/icons-ic/credit-card";
import icPersonAdd from "@iconify/icons-ic/twotone-person-add";
import icCatalogo from '@iconify/icons-ic/book'

@Component({
  selector: "vex-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "vex";

  constructor(
    private configService: ConfigService,
    private styleService: StyleService,
    private renderer: Renderer2,
    private platform: Platform,
    @Inject(DOCUMENT) private document: Document,
    @Inject(LOCALE_ID) private localeId: string,
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private splashScreenService: SplashScreenService
  ) {
    Settings.defaultLocale = this.localeId;

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, "is-blink");
    }

    /**
     * Customize the template to your needs with the ConfigService
     * Example:
     *  this.configService.updateConfig({
     *    sidenav: {
     *      title: 'Custom App',
     *      imageUrl: '//placehold.it/100x100',
     *      showCollapsePin: false
     *    },
     *    showConfigButton: false,
     *    footer: {
     *      visible: false
     *    }
     *  });
     */

    /**
     * Config Related Subscriptions
     * You can remove this if you don't need the functionality of being able to enable specific configs with queryParams
     * Example: example.com/?layout=apollo&style=default
     */
    // this.route.queryParamMap.pipe(
    //   map(queryParamMap => queryParamMap.has('rtl') && coerceBooleanProperty(queryParamMap.get('rtl'))),
    // ).subscribe(isRtl => {
    //   this.document.body.dir = isRtl ? 'rtl' : 'ltr';
    //   this.configService.updateConfig({
    //     rtl: isRtl
    //   });
    // });

    // this.route.queryParamMap.pipe(
    //   filter(queryParamMap => queryParamMap.has('layout'))
    // ).subscribe(queryParamMap => this.configService.setConfig(queryParamMap.get('layout') as ConfigName));

    // this.route.queryParamMap.pipe(
    //   filter(queryParamMap => queryParamMap.has('style'))
    // ).subscribe(queryParamMap => this.styleService.setStyle(queryParamMap.get('style') as Style));

    this.navigationService.items = [
      {
        type: "dropdown",
        label: "Panel de control",
        icon: icLayers,
        children: [
          {
            type: "link",
            label: "Dashboard",
            route: "dashboard",
           
          },
        ],
      },

      {
        type: "dropdown",
        label: "Catálogos",
        icon: icCatalogo,
        children: [
          {
            type: "link",
            label: "Catálogo de Clientes",
            route: "clientes",
            icon: icCatClientes,
          },
          {
            type: "link",
            label: "Catálogo de Usuarios",
            route: "usuarios",
            icon: icPersonAdd,
          },
        ],
      },
      {
        type: "dropdown",
        label: "Ingresos",
        icon: icIngresos,
        children: [
          {
            type: "link",
            label: "Ingresos Mensuales",
            route: "ingresos",
            icon: icLicencias,
          },
          {
            type: "link",
            label: "Rendición de Cuentas",
            route: "rendicion",
            icon: icRecargas,
          },
          {
            type: "link",
            label: "Ingresos de Usuarios",
            route: "ingresosUsuarios",
            icon: icRecargas,
          },
          {
            type: "link",
            label: "Informes",
            route: "informes"
          }
        ],
      },
      /*{
            type: 'link',
            label: 'Egresos',
            route: '/apps/calendar',
            icon: icEgresos
          }*/
    ];
  }
}

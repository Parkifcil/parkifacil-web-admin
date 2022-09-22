import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import { defaultChartOptions } from "../../@vex/utils/default-chart-options";
import { TableColumn } from "../../@vex/interfaces/table-column.interface";
import { DashboardAnalyticsService } from "../services/dashboard-analytics.service";
import { DateTimeFormatOptions } from "luxon";
import theme from "../../@vex/utils/tailwindcss";

// ICONOS
import icMoreVert from "@iconify/icons-ic/twotone-more-vert";
import icGroup from "@iconify/icons-ic/twotone-group";
import icPageView from "@iconify/icons-ic/twotone-pageview";
import icCloudOff from "@iconify/icons-ic/twotone-cloud-off";
import icTimer from "@iconify/icons-ic/twotone-timer";
import icAndroid from "@iconify/icons-ic/android";
import icIOS from "@iconify/icons-fa-brands/apple";
import icWeek from "@iconify/icons-fa-solid/calendar-week";
import icDay from "@iconify/icons-fa-solid/calendar-day";
import icFilterList from "@iconify/icons-ic/twotone-filter-list";

@Component({
  selector: "vex-dashboard-analytics",
  templateUrl: "./dashboard-analytics.component.html",
  styleUrls: ["./dashboard-analytics.component.scss"],
})
export class DashboardAnalyticsComponent implements OnInit, AfterViewInit {
  constructor(
    private cd: ChangeDetectorRef,
    private dashboardservices: DashboardAnalyticsService
  ) {}

  // Configuración de fechas.
  myDate: Date =  new Date();
  options: DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  inicioSemana: string = new Date(this.myDate.setDate(this.myDate.getDate() - this.myDate.getDay() + 1)).toLocaleString("es-MX", this.options).split("/").reverse().join('/');
  finSemana: string = new Date( this.myDate.setDate(this.myDate.getDate() - this.myDate.getDay() + 6)).toLocaleString("es-MX", this.options).split("/").reverse().join('/');


  titulo = "Transacciones por dispositivo";
  // subtitulo = 'Android: 3,075';
  // subtitulo2 = 'IOS: 1800';
  // subtitulo3 = 'Total: 4,875';
  subtitulo: number = 0;
  subtitulo2: number = 0;
  subtitulo3: number = 0;

  leyenda1 = "$ 2,640.00";
  leyenda2 = "-$ 1,976.00";
  leyenda3 = "$ 664.00";
  leyenda4 = "-$ 22,841.00";

  traNtitulo2 = "Comparativa de Ingresos";
  // traNsubtitulo = 'Android: $ 105,998.00';
  // traNsubtitulo2 = 'IOS: $ 112,997.00';
  // traNsubtitulo3 = 'Total: $ 218,995.00';
  traNsubtitulo: number = 0;
  traNsubtitulo2: number = 0;
  traNsubtitulo3: number = 0;

  arrsemanalAndroid: number[] = [];
  arrsemanalAndroidIngresos: any[] = [];
  dbltotalsemanalAndroid: number = 0;

  arrsemanalIos: any[] = [];
  arrsemanalIosIgresos: any[] = [];
  dbltotalsemanalIos: number = 0;

  arringresosTotales: any = {};

  arrcomparativosAndroid: any[] = [];
  arrcomparativosAndroidValue: any[] = [];

  arrcomparativosIos: any[] = [];
  arrcomparativosIosValue: any[] = [];

  arrcomparativosTranAndroid: any[] = [];
  arrcomrarativosTranAndroidValue: any[] = [];

  arrcomparativosTranIos: any[] = [];
  arrcomparativosTranIosValue: any[] = [];

  dbltotalmensual: number = 0;
  dblporcentajemensual: number = 0;
  intporcentajetrasaccionmensual: number = 0;

  arrhistoricoMes: any[] = [];
  arrhistoricoMesValues: number[] = [];

  series: ApexAxisChartSeries = [
    {
      name: "Subscribers",
      data: [28, 40, 36, 0, 52, 38, 60, 55, 67, 33, 89, 44],
    },
  ];

  // Grafica comparativa Transacciones
  userSessionsSeries: ApexAxisChartSeries = []; /*[
    {
      name: 'Android',
      data: this.arrcomrarativosTranAndroidValue
    },
    {
      name: 'IOS',
      data: this.arrcomparativosTranIosValue
    },
  ];*/

  // Grafica comparativa Ingresos
  userSessionsSeries2: ApexAxisChartSeries = [
    {
      name: "Android",
      data: this.arrcomparativosAndroidValue,
    },
    {
      name: "IOS",
      data: this.arrcomparativosIosValue,
    },
  ];

  // Grafica mensual de ingresos
  salesSeries: ApexAxisChartSeries = []; /*[{
    name: 'Ingresos totales',
    data: this.arrhistoricoMesValues
  }];*/

  // Grafica Semanal Android
  pageViewsSeries: ApexAxisChartSeries = [
    {
      name: "Ingresos",
      data: this.arrsemanalAndroidIngresos,
    },
  ];

  // Grafica Semanal IOS
  uniqueUsersSeries: ApexAxisChartSeries = []; /*[{
    name: 'Ingresos',
    data: this.arrsemanalIosIgresos
  }];*/

  // Grafica resumen mensual
  labelsresumen: any[] = [];

  ingresosSemanalesIOSChartOptions = defaultChartOptions({
    chart: {
      type: "area",
      height: 175,
    },
    colors: ["#ff9800"],
  });

  ingresosSemanalesAndroidChartOptions = defaultChartOptions({
    chart: {
      type: "area",
      height: 175,
    },
  });

  icGroup = icGroup;
  icPageView = icPageView;
  icCloudOff = icCloudOff;
  icTimer = icTimer;
  icMoreVert = icMoreVert;
  icAndroid = icAndroid;
  icIOS = icIOS;
  icWeek = icWeek;
  icDay = icDay;
  icFilterList = icFilterList;

  theme = theme;
  oculte;


  ngOnInit() {
    console.log(this.inicioSemana, this.finSemana)
    this.mtdobterdatosSemanalesAdmin();
    this.mtdobtenerdatoscomparativosIngresos();
    this.mtdobtenerdatoscomparativosTrasacciones();
    this.mtdobtenerdatosResumen();
  }

  ngAfterViewInit(): void {}

  mtdobterdatosSemanalesAdmin() {
    this.dashboardservices.mtdgetdatosDashboardAdmin().then((response: any) => {
      // console.log('Datos de las graficas', response);
      this.arringresosTotales = response.data;
      // semanal Android
      this.dbltotalsemanalAndroid = response.data.dblSemanalAndriod;
      for (const totala of response.data.dtSemanaAndroid) {
        this.arrsemanalAndroid.push(totala.total.toFixed(2));
      }
      // console.log('A ',this.arrsemanalAndroid);
      this.pageViewsSeries = [
        {
          name: "Ingresos",
          data: this.arrsemanalAndroid,
        },
      ];

      // semanal ios
      this.dbltotalsemanalIos = response.data.dblSemanalIOS;
      for (const totalio of response.data.dtSemanaIOS) {
        this.arrsemanalIos.push(totalio.total.toFixed(2));
      }
      // console.log('O ',this.arrsemanalIos);
      this.uniqueUsersSeries = [
        {
          name: "Ingresos",
          data: this.arrsemanalIos,
        },
      ];
    });
  }

  mtdobtenerdatoscomparativosIngresos() {
    this.dashboardservices
      .mtdgetdatosDashboardComparativa(this.inicioSemana, this.finSemana)
      .then(({data: response}) => {  
        this.setDatosComparativaIngresos(response);
      });
  }

  mtdobtenerdatoscomparativosTrasacciones() {
    this.dashboardservices
      .mtdgetdatosDashboardTransacciones(this.inicioSemana, this.finSemana)
      .then(({data: response}) => {     
        this.setDatosComparativaTransacciones(response);
      });
  }

  mtdobtenerdatosResumen() {
    const fecha = new Date();
    const anio = fecha.getFullYear();
    
    this.dashboardservices
      .mtdgetdatosDashboardResumen(anio)
      .then((response: any) => {

        this.dbltotalmensual = response.data.dblMontoMensual;
        this.dblporcentajemensual = response.data.dblPorcentajeIngresos;
        this.intporcentajetrasaccionmensual =
          response.data.intPorcentajeTransacciones;
        for (const totalresu of response.data.dtFechas) {
          this.arrhistoricoMesValues.push(totalresu.flt_monto);
          // this.labelsresumen.push(totalresu.fecha);
        }
        this.salesSeries = [
          {
            name: "Ingresos totales",
            data: this.arrhistoricoMesValues,
          },
        ];
      });
  }

  mtdchangeobtenerMovimientosxPeriodos(fechaInicio, fechaFin) {
    if (fechaInicio === "" || fechaFin === "") return;

    const inicioPeriodo = this.formatearFecha(fechaInicio);
    const finPeriodo = this.formatearFecha(fechaFin);
      

    this.dashboardservices
      .mtdgetdatosDashboardComparativa(inicioPeriodo, finPeriodo)
      .then(({ data: response }) => {
        this.setDatosComparativaIngresos(response);
      });

    this.dashboardservices
      .mtdgetdatosDashboardTransacciones(inicioPeriodo, finPeriodo)
      .then(({ data: response }) => {
        this.setDatosComparativaTransacciones(response);
      });
  }

  descargarInforme( fechaInicio, fechaFin ) {
    let inicioPeriodo: string;
    let finPeriodo: string;

    if (fechaInicio && fechaFin ){
      // Informe por periodo
      // Se crea la fecha utilizando una instancia de Date para obtener la fecha con dos digitos y haya consistencia despues en los nombres de los archivos.
      // Se formatea la fecha fecha al crear la nueva instancia para que el orden sea el correcto (DD/MM/YYYY).
      inicioPeriodo = this.formatearFecha(new Date(this.formatearFecha(fechaInicio)).toLocaleString('es-MX', this.options));
      finPeriodo = this.formatearFecha(new Date(this.formatearFecha(fechaFin)).toLocaleString('es-MX', this.options));
    } else {
      // Informe semanal
      inicioPeriodo = this.inicioSemana;
      finPeriodo = this.finSemana;
    }

    this.dashboardservices.mtdDescargarInformes(inicioPeriodo, finPeriodo).then((response) => {
      var link = document.createElement("a");
      link.download = `Informe ${this.formatearFecha(inicioPeriodo)} - ${this.formatearFecha(finPeriodo)}.xlsx`;
      link.href = window.URL.createObjectURL(response);
      link.click();
    });
  }

  formatearFecha = (fecha) => {
    // Invierte el formato de la fecha de DD/MM/YYYY a YYYY/MM/DD y viseversa
    return fecha.split("/").reverse().join("/");
  }

  setDatosComparativaIngresos(data) {
    // Almacena/actualiza los datos comparativos de ingresos.

    this.traNsubtitulo = data.dbl_total_andriod;
    this.traNsubtitulo2 = data.dbl_total_ios;
    this.traNsubtitulo3 = data.dbl_total;

    this.arrcomparativosAndroid = [];
    this.arrcomparativosIos = [];

    for (const totala of data.dtCompSemAndroid) {
      this.arrcomparativosAndroid.push(totala.total);
    }
    for (const totalios of data.dtCompSemIOS) {
      this.arrcomparativosIos.push(totalios.total);
    }

    this.userSessionsSeries2 = [
      {
        name: "Android",
        data: this.arrcomparativosAndroid,
      },
      {
        name: "IOS",
        data: this.arrcomparativosIos,
      },
    ];
  }

  setDatosComparativaTransacciones(data) {
    // Almacena/actualiza los datos comparativos de transacciones
    
    this.subtitulo = data.dbl_total_andriod;
        this.subtitulo2 = data.dbl_total_ios;
        this.subtitulo3 = data.dbl_total;

        this.arrcomrarativosTranAndroidValue = [];
        this.arrcomparativosTranIosValue = [];

        for (const trana of data.dtCompTransAndroid) {
          this.arrcomrarativosTranAndroidValue.push(trana.intTransacciones);
        }
        for (const trano of data.dtCompTransIOS) {
          this.arrcomparativosTranIosValue.push(trano.intTransacciones);
        }
        this.userSessionsSeries = [
          {
            name: "Android",
            data: this.arrcomrarativosTranAndroidValue,
          },
          {
            name: "IOS",
            data: this.arrcomparativosTranIosValue,
          },
        ];
  }
}

import { NgModule } from "@angular/core";
import { NotifierModule, NotifierOptions } from "angular-notifier";
import { AppComponent } from "./app.component";

const notifierDefaultOptions: NotifierOptions = {
    position: {
      horizontal: {
        position: 'left',
        distance: 12,
      },
      vertical: {
        position: 'top',
        distance: 18,
        gap: 10,
      },
    },
    theme: 'material',
    behaviour: {
      autoHide: 4000,
      onClick: false,
      onMouseover: 'pauseAutoHide',
      showDismissButton: true,
      stacking: 4,
    },
    animations: {
      enabled: true,
      show: {
        preset: 'slide',
        speed: 300,
        easing: 'ease',
      },
      hide: {
        preset: 'fade',
        speed: 300,
        easing: 'ease',
        offset: 50,
      },
      shift: {
        speed: 300,
        easing: 'ease',
      },
      overlap: 150,
    },
  };

  @NgModule({
    imports: [NotifierModule.withConfig(notifierDefaultOptions)],
    exports: [NotifierModule]       
  })

  export class NotificationModule {}
  
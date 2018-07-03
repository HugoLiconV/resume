import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ELEMENT_PROBE_PROVIDERS } from '@angular/platform-browser/src/dom/debug/ng_probe';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const $nav = $('#logo-nav');
    const $win = $(window);
    let winH = $win.height(); // Get the window height.
    let firstScroll = true;
    $win.on('scroll', function () {
      if ($(this).scrollTop() < winH) { //
        if (firstScroll) {
          $nav.addClass('hide');
        } else {
          $nav.removeClass('show-logo');
          $nav.addClass('hide-logo');
        }
      } else {// esta en la primera seccion
        $nav.removeClass('hide-logo');
        $nav.addClass('show-logo');
        firstScroll = false;
      }
    }).on('resize', function() { // If the user resizes the window
       winH = $(this).height(); // you'll need the new height value
    });
  }

}

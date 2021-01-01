
'use strict';
import ibg from './files/imageToBackground';
import testWebp from './files/isSupportWebp';
import {header} from './files/header';
import slider from './files/slider';
import forms from './files/form';
import {smoothScrolling} from './files/scrolling';
import accordion from './files/accordion';
import incline from './files/cardIncline';
import dynamicAdapt from './files/dynamicAdapt';

		
	ibg();
	testWebp();
	header();
	dynamicAdapt(1);
	dynamicAdapt(2);
	incline();
	slider();
	accordion('.item__title', '.item__title_active', '.item__link', '.item__link_active','.footer__column_list');
	forms();
	smoothScrolling('.link');
	
/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - present Instructure, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { registerTheme } from '@instructure/ui-themeable/lib/registry'

import KEYS from '../../keys'

import borders from './borders'
import colors from './colors'
import transitions from './transitions'
import typography from './typography'
import spacing from './spacing'
import forms from './forms'
import media from './media'
import breakpoints from './breakpoints'
import shadows from './shadows'
import stacking from './stacking'

export const key = KEYS.CANVAS

export const baseVariables = {
  borders,
  colors,
  transitions,
  typography,
  spacing,
  forms,
  media,
  breakpoints,
  shadows,
  stacking
}

export const brandVariables = {
  /* Defaults for Canvas account branding variables: */
  'ic-brand-primary': colors.textBrand,
  'ic-brand-font-color-dark': colors.textDarkest,

  'ic-link-color': colors.textBrand,
  'ic-link-decoration': 'none',

  'ic-brand-button--primary-bgd': colors.backgroundBrand,
  'ic-brand-button--primary-text': colors.textLightest,
  'ic-brand-button--secondary-bgd': colors.backgroundDarkest,
  'ic-brand-button--secondary-text': colors.textLightest,

  'ic-brand-global-nav-bgd': colors.backgroundBrandSecondary,
  'ic-global-nav-link-hover': colors.backgroundDarkest,
  'ic-brand-global-nav-ic-icon-svg-fill': colors.textLightest,
  'ic-brand-global-nav-ic-icon-svg-fill--active': colors.textBrand,
  'ic-brand-global-nav-menu-item__text-color': colors.textLightest,
  'ic-brand-global-nav-menu-item__text-color--active': colors.textBrand
}

export const variables = {
  ...baseVariables,
  ...brandVariables
}

export default registerTheme({
  key: KEYS.CANVAS,
  variables
})

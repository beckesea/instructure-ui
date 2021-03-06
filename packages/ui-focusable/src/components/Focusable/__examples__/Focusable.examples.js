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

import React from 'react'
/* eslint-disable instructure-ui/no-relative-package-imports */
import View from '../../../../../ui-layout/lib/components/View'
import Text from '../../../../../ui-elements/lib/components/Text'
/* eslint-enable instructure-ui/no-relative-package-imports */
import FocusableView from '../FocusableView'

export const shapes = () => {
  return (
    <View display="block">
      {["circular", "rectangular"].map((shape, index) => (
        <FocusableView
          key={index}
          focused={true}
          shape={shape}
          margin="0 small 0 0"
        >
          Focused
        </FocusableView>
      ))}
    </View>
  )
}

export const colors = () => {
  return (
    <View display="block">
      <FocusableView
        focused={true}
        margin="0 small 0 0"
        color="primary"
      >
        Focused
      </FocusableView>
      <FocusableView
        focused={true}
        margin="0 small 0 0"
        color="error"
      >
        Focused
      </FocusableView>
      <View padding="small" background="inverse">
        <FocusableView
          focused={true}
          color="inverse"
        >
          <Text color="primary-inverse">Focused</Text>
        </FocusableView>
      </View>
    </View>
  )
}

import React from 'react';
import { storiesOf } from '@storybook/react'

import Button from './Button'

storiesOf('Button', module)
add.('Primary', () => <button label="Primary" type="nav"/>)

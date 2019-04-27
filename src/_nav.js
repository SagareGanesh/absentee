import { FormattedMessage } from 'react-intl';
import messages from './messages';
import React from 'react';

export default {
  items: [
    {
      name: <FormattedMessage {...messages.Attendance} />,
      url: '/attendance',
      icon: 'icon-clock'
    },
    {
      name: <FormattedMessage {...messages.Students} />,
      url: '/students',
      icon: 'icon-user'
    },
    {
      name: <FormattedMessage {...messages.Elevate} />,
      icon: 'fa fa-level-up',
      url: '/elevate'
    }
  ],
};

import React from 'react';

import { FolioFormattedDate } from '@folio/stripes-acq-components';

import {
  INVOICE_STATUS,
  POST_APPROVAL_STATUSES,
} from '../constants';

export const getInvoiceStatusLabel = ({ status = '' }) => (
  `ui-invoice.invoice.status.${(status || '').toLowerCase()}`
);

export const formatAmount = (amount = '') => `$${amount.toLocaleString('en')}`;

export const formatDate = (dateString) => <FolioFormattedDate value={dateString} />;

export const IS_EDIT_POST_APPROVAL = (id, status) => {
  return Boolean(id && POST_APPROVAL_STATUSES.includes(status));
};

export const isPayable = (status) => INVOICE_STATUS.approved === status;

export const isPaid = (status) => INVOICE_STATUS.paid === status;

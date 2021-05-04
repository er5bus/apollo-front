
export const SCHOOL_DROPOUT_TRACKING_STATUS_TRACKING_NEW = 1
export const SCHOOL_DROPOUT_TRACKING_STATUS_TRACKING_QUALIFIED = 2
export const SCHOOL_DROPOUT_TRACKING_STATUS_TRACKING_CLOSED = 3
export const SCHOOL_DROPOUT_TRACKING_STATUS_TRACKING_TRANSFORMED = 4


export const TRACKING_STATUS = { 
  [SCHOOL_DROPOUT_TRACKING_STATUS_TRACKING_NEW]: "SCHOOL_DROPOUT.TRACKING_STATUS.TRACKING_NEW",
  [SCHOOL_DROPOUT_TRACKING_STATUS_TRACKING_QUALIFIED]: "SCHOOL_DROPOUT.TRACKING_STATUS.TRACKING_QUALIFIED",
  [SCHOOL_DROPOUT_TRACKING_STATUS_TRACKING_CLOSED]: "SCHOOL_DROPOUT.TRACKING_STATUS.TRACKING_CLOSED" ,
  [SCHOOL_DROPOUT_TRACKING_STATUS_TRACKING_TRANSFORMED]: "SCHOOL_DROPOUT.TRACKING_STATUS.TRACKING_TRANSFORMED"
}


export const schoolDropoutTrackingStatusUIHelper = (intl) =>
  Object.keys(TRACKING_STATUS).map((key) => ({
    value: parseInt(key),
    label: intl.formatMessage({ id: TRACKING_STATUS[key] }),
  }))

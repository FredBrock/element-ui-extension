/* istanbul ignore next */
export const File = HAS_WINDOW_SUPPORT
  ? WINDOW.File
  : class File extends Object {};

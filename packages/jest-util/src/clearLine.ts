/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {WriteStream} from 'tty';

export default function clearLine(stream: WriteStream): void {
  if (stream.isTTY) {
    stream.write('\x1b[999D\x1b[K');
  }
}

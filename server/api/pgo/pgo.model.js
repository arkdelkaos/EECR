'use strict';

import mongoose from 'mongoose';

var PgoSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Pgo', PgoSchema);

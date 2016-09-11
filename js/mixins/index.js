import armedEntityMixinFactory from './armedEntityMixin';
import manualFireMixinFactory from './manualFireMixin';
import arrowMovementMixinFactory from './arrowMovementMixin';
import randomRotationMixinFactory from './randomRotationMixin';
import randomMovementMixinFactory from './randomMovementMixin';
import autoFireMixinFactory from './autoFireMixin';
import bankMixinFactory from './bankMixin';

const mixins = {
  armedEntityMixinFactory,
  arrowMovementMixinFactory,
  autoFireMixinFactory,
  bankMixinFactory,
  manualFireMixinFactory,
  randomMovementMixinFactory,
  randomRotationMixinFactory
};

export default mixins;

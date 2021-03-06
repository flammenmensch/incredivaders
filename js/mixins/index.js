import armedEntityMixinFactory from './armedEntityMixin';
import manualFireMixinFactory from './manualFireMixin';
import arrowMovementMixinFactory from './arrowMovementMixin';
import randomRotationMixinFactory from './randomRotationMixin';
import randomMovementMixinFactory from './randomMovementMixin';
import autoFireMixinFactory from './autoFireMixin';
import bankMixinFactory from './bankMixin';
import waveMovementFactory from './waveMovementMixin';
import accelerateAfterFactory from './accelerateAfterMixin';
import simpleMovementFactory from './simpleMovementMixin';
import simpleRotationFactory from './simpleRotationMixin';
import scoreFactory from './scoreMixin';

const mixins = {
  armedEntityMixinFactory,
  arrowMovementMixinFactory,
  autoFireMixinFactory,
  bankMixinFactory,
  manualFireMixinFactory,
  randomMovementMixinFactory,
  randomRotationMixinFactory,
  waveMovementFactory,
  accelerateAfterFactory,
  simpleMovementFactory,
  simpleRotationFactory,
  scoreFactory
};

export default mixins;

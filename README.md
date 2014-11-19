dennis_permalink
================

Dennis Permalink provides a token and a predictable pattern 
that is used for Open Graph urls and wherever a permalink is needed.

The pattern uses a predefined prefix which should be set on install for example;
variable_set('dennis_permalink_prefix', 'us');

The simplest way to do this is within a hook_update_N().
For example:

/**
 * Enable and configure dennis_permalink.
 */
function HOOK_update_7100() {
  module_enable(array('dennis_permalink'));
  variable_set('dennis_permalink_prefix', 'us');
}


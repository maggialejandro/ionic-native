import {Plugin, Cordova} from './plugin';
import {Email} from './types/email.type.ts';
declare var cordova;

/**
 * @name Email Composer
 * @description
 *
 * Requires Cordova plugin: cordova-plugin-email-composer. For more info, please see the [Email Composer plugin docs](https://github.com/katzer/cordova-plugin-email-composer).
 *
 * @usage
 * ```ts
 * import {EmailComposer} from 'ionic-native';
 *
 *
 * EmailComposer.isAvailable().then((available) =>{
 *  if(available) {
 *    //Now we know we can send
 *  }
 * });
 *
 * let email = {
 *   to: 'max@mustermann.de',
 *   cc: 'erika@mustermann.de',
 *   bcc: ['john@doe.com', 'jane@doe.com'],
 *   attachments: [
 *     'file://img/logo.png',
 *     'res://icon.png',
 *     'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
 *     'file://README.pdf'
 *   ],
 *   subject: 'Cordova Icons',
 *   body: 'How are you? Nice greetings from Leipzig',
 *   isHtml: true
 * };
 *
 * // Send a text message using default options
 * EmailComposer.open(email);
 *
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-email-composer',
  pluginRef: 'cordova.plugins.email',
  repo: 'https://github.com/katzer/cordova-plugin-email-composer.git',
  platforms: ['Android', 'iOS', 'Windows Phone 8']
})
export class EmailComposer {

  /**
   * Verifies if sending emails is supported on the device.
   *
   * @param app {string?} An optional app id or uri scheme.
   * @returns {Promise<boolean>} Resolves if available, rejects if not available
   */
  static isAvailable (app?: string): Promise<any> {
    return new Promise<boolean>((resolve, reject) => {
      if (app) cordova.plugins.email.isAvailable(app, (isAvailable) => { if (isAvailable) resolve(); else reject(); });
      else cordova.plugins.email.isAvailable((isAvailable) => { if (isAvailable) resolve(); else reject(); });
    });
  }

  /**
   * Adds a new mail app alias.
   *
   * @param alias {string} The alias name
   * @param packageName {string} The package name
   */
  @Cordova()
  static addAlias(alias: string, packageName: string): void {}

  /**
   * Displays the email composer pre-filled with data.
   *
   * @param email {Email} Email
   * @param scope {any?} An optional scope for the promise
   * @returns {Promise<any>} Resolves promise when the EmailComposer has been opened
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 3
  })
  static open(email: Email, scope?: any): Promise<any> {return; }

}

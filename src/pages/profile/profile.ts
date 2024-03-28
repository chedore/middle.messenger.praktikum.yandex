import Block from '../../core/Block';
import { profile_props } from '../../utils/const';

export class ProfilePage extends Block {
  constructor() {
    super({
      profileValues: profile_props,
    });
  }
  protected render(): string {
    return `
      <main class="containerprofile">
        <aside class="containerprofile__sidebar">
          {{{ProfileButtonChat}}}
        </aside>
        <section class="containerprofile__main">
          {{{ProfileAvatar}}}
          <form>
            {{#each profileValues}}
              {{{ ProfileInfo label=this.label type=this.type name=this.name value=this.value }}}
            {{/each}}
          </form>
          {{{ ProfileButtonSave label="Сохранить" }}}
        </section>
      </main>
    `;
  }
}

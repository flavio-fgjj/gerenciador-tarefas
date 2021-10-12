import { TarefaConcluidaDirective } from './tarefa-concluida.directive';

describe('TarefaConcluidaDirective', () => {
  it('should create an instance', () => {
    let elRefMock = {
      nativeElement: document.createElement('div')
    };

    const directive = new TarefaConcluidaDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});

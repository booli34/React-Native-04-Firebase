import { conexaoFS } from './conexaoFB';

export class LivroFB{
    state = {
        colecao: conexaoFS.collection('ColecionaveisFirestore/itens/livros')
    };
    
    pegarColecao(){
        return this.state.colecao;
    }
}
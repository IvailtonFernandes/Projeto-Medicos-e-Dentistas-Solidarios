
import s from './voluntario.module.scss'

const Vonluntario = () => {
  return (
    <main>
   <section className={s.sectionVoluntario}>
           <h2>Seja Voluntário</h2>
           <p>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>
   
           <div className={s.boxCards}>
             <article>
               <h3>Impacto Direto</h3>
               <p>Sua dedicação salva vidas e transforma comunidades</p>
             </article>
             <article>
               <h3>Crescimento Pessoal</h3>
               <p>Desenvolva habilidades e cresça profissionalmente</p>
             </article>
             <article>
               <h3>Comunidade</h3>
               <p>Faça parte de uma rede de profissionais comprometidos</p>
             </article>
           </div>
         </section>
        
         <section className={s.formulario}>
          <div className={s.formBox}>
        <h1>Inscrição para Voluntários</h1>

        <h2>Dados Pessoais</h2>

        <form>
          <div className={s.row}>
            <input type="text" placeholder="Seu Nome *" required />
            <input type="email" placeholder="Seu Email *" required />
          </div>

          <div className={s.row}>
            <input type="tel" placeholder="Seu Telefone *" required />
          </div>

          <h2>Mensagem Adicional</h2>

          <textarea placeholder="Conte-nos porque você quer ser voluntario..." />

          <p className={s.info}>
            Entraremos em contato para mais informações
          </p>

          <button type="submit">Enviar Inscrição</button>
        </form>
        </div>
      </section>
    </main>
  )
}

export default Vonluntario
import React, { useState } from 'react'
import './index.scss'
import Modal from '../../common/components/Modal'

function Home () {
  const [count, setCount] = useState(0)
  const [isModal, setModal] = useState(false)
  const _text = (
    <>
      <p>不知道你上次思考前端职业规划是什么时候？</p>

      <p>如果你是一位学生，你肯定对前端这个职业感到陌生，你虽然没有经验，但却对未来充满好奇，你有大把时间来思考，但可能摸不着方向，有种拳头打在棉花上的无力感。</p>

      <p>如果你已经参加了工作，不论是刚开始实习，还是工作了 3 年、5 年甚至 10 年，一定觉得非常充实，但真正用于思考的时间足够吗？如果维持现状，再过 5 年自己的提升点在哪里？如果你对这些结论不清晰，很可能是缺乏了对职业规划的思考。</p>

      <p>这种缺乏职业规划的焦虑已经发展成为了商机。当你没有清晰职业规划，正在迷茫的时候，培训机构站出来说，是不是对职业规划充满焦虑？如果是，可以订购我们的课程，名牌大厂 P10 带你跑赢职场。其实课程确实是干货，但一个具体课程并不能代替你自己的思考，你需要自己想明白自己想要的，而不是被别人灌输思想，因为职场没有标准路线，但培训机构的文案确实有标准写法。</p>

      <p>所以这篇前端职业规划是站在我自己角度写的，你如果也在思考长线发展问题，可以作为参考。</p>

      <p>我总结出三个主要思考方向，分别是 知识分类、领域深耕、经济视角。</p>

      <p>知识分类 指的是你对知识的理解是否成体系。现在全球每天新增的知识，一个人穷尽一生也学不完，如果不建立一套你自己的知识筛选标准，长期发展就无从谈起。</p>

      <p>领域深耕 是实践，天天学习也是没有用的，你必须要做出什么有价值的事情，才能为行业带来贡献，或者说将知识转化为财富。当然不同职业学习与实践的比例是不同的，比如理论物理可能模糊了学习与实践的边界，而在职场环境的工程师，更容易区分什么是学习，什么是实践。</p>

      <p>经济视角 是说你要能够带着经济视角看问题。可以说没有经济活动，我们一切学习、生产、职业都没有任何意义，因为推动我们学习、推动社会生产的动力是交易，没有经济活动就没有需求，需求是推动一切活动的基础。稍微理解了经济和生产的关系，就能理解为什么技术要为商业服务，因为任何技术都要有转化为商业价值的潜力才值得被研究，大到社会价值，小到产品价值，都一样。</p>
    </>
  )

  return (
    <div className='home page'>
      <header className='home-header'>
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>

      <div className='box'>
        <span className='color-red'>react</span> use <span className='color-green'>vite</span>
      </div>
      <div className='box'>
        <button onClick={() => setModal(true)}>打开底部弹窗</button>
      </div>
      <Modal
        isVisible={isModal}
        title='Modal Title'
        content={_text}
        footer={null}
        // footer={<button onClick={() => setModal(false)}>Cancel</button>}
        onClose={() => setModal(false)}
      />
    </div>
  )
}

export default Home

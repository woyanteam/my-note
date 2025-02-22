import DrawingBoard from './DrawingBoard'
import type { IAppProps } from './types'
import { watch } from 'vue'

class App {
  static drawingBoardInstance: null | DrawingBoard = null

  // 初始化
  static init = ({ domId, onChange, config = {}, userDefinedData = {} }: IAppProps) => {
    this.drawingBoardInstance = new DrawingBoard({
      domId,
      onChange,
      config,
      userDefinedData,
    })
  }

  // 改变笔刷
  static activeIndexChange(newIndex: number) {
    // 实现方法逻辑
    if (this.drawingBoardInstance) {
      this.drawingBoardInstance.activeIndexChange(newIndex)
    }
  }

  // 撤销
  static historyBack() {
    // 实现方法逻辑
    if (this.drawingBoardInstance) {
      this.drawingBoardInstance.historyBack()
    }
  }

  // 取消撤销
  static historyUnBack() {
    // 实现方法逻辑
    if (this.drawingBoardInstance) {
      this.drawingBoardInstance.historyUnBack()
    }
  }

  // 清空
  static clearData(activeIndex: number) {
    // 实现方法逻辑
    if (this.drawingBoardInstance) {
      this.drawingBoardInstance.clearData()
      this.drawingBoardInstance.activeIndexChange(activeIndex)
    }
  }
  // 下载
  static downLoad() {
    // 实现方法逻辑
    if (this.drawingBoardInstance) {
      this.drawingBoardInstance.downLoad()
    }
  }
  // 卸载
  static destroy() {
    if (this.drawingBoardInstance) {
      this.drawingBoardInstance.destroy()
    }
  }

  // 修改工具样式
  static changeDisposition(type: string, value: string | number) {
    if (this.drawingBoardInstance) {
      this.drawingBoardInstance.changeDisposition(type, value)
    }
  }

  // 修改页面 单页/全局 样式
  static changePageDisposition(type: string, value: string | number) {
    if (this.drawingBoardInstance) {
      this.drawingBoardInstance.changePageDisposition(type, value)
    }
  }

  // 添加获取 selectedGraphics 的方法
  static getSelectedGraphics() {
    if (this.drawingBoardInstance) {
      return this.drawingBoardInstance.selectedGraphics
    }
    return null
  }

  // 获取画板数据
  static getDataJson() {
    if (this.drawingBoardInstance) {
      return this.drawingBoardInstance.getDataJson()
    }
  }
  // 写入画板数据
  static setDataJson(dataJson) {
    if (this.drawingBoardInstance) {
      this.drawingBoardInstance.setDataJson(dataJson)
    }
  }
  // 添加监听 selectedGraphics 变化的方法
  static onSelectedGraphicsChange(callback: (value: any) => void) {
    if (this.drawingBoardInstance) {
      watch(this.drawingBoardInstance.selectedGraphics, (newValue) => {
        callback(newValue)
      })
    }
  }
}

export default App

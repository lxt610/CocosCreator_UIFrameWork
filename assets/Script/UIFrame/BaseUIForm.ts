import UIManager from "./UIManager";
import UIType from "./UIType";
import { UIFormType } from "./config/SysDefine";
import UIMaskManager from "./UIMaskManager";


const {ccclass, property} = cc._decorator;

@ccclass
export default class BaseUIForm extends cc.Component {

    /** 窗体名字 */
    public UIFormName: string;
    /** 窗体类型 */
    public CurrentUIType = new UIType();
    /** 点击阴影关闭弹窗 */
    public ClickMaskClose = false;
    


    /**
     * 消息初始化
     * 子类需重写
     * @param obj
     */
    public init(obj?: any) {

    }
    
    /**
     * 窗体生命周期
     */
    public DisPlay() {
        this.node.active = true;
        if(this.CurrentUIType.UIForms_Type == UIFormType.PopUp) {
            this.ShowPopUpAnimation(() => {
                UIMaskManager.getInstance().addMaskWindow(this.node, this.CurrentUIType.UIForm_LucencyType);    
            });
        }
    }
    public Hiding() {
        if(this.CurrentUIType.UIForms_Type == UIFormType.PopUp) {
            UIMaskManager.getInstance().removeMaskWindow(this.node);
        }
        this.HidePopUpAnimation();
        this.node.active = false;
    }
    public ReDisPlay() {
        this.node.active = true;
        if(this.CurrentUIType.UIForms_Type == UIFormType.PopUp) {
            this.ShowPopUpAnimation(() => {
                UIMaskManager.getInstance().addMaskWindow(this.node, this.CurrentUIType.UIForm_LucencyType);    
            });
        }
    }
    public Freeze() {
        this.node.active = true;
        if(this.CurrentUIType.UIForms_Type == UIFormType.PopUp) {
            
        }
    }
    /**
     * 显示与关闭
     */
    public ShowUIForm(uiFormName: string, obj?: any) {
        UIManager.GetInstance().ShowUIForms(uiFormName, obj);
    }
    public CloseUIForm() {
        UIManager.GetInstance().CloseUIForms(this.UIFormName);
    }

    /**
     * 弹窗动画
     */
    public ShowPopUpAnimation(callback: Function) {
        callback();
    }
    public HidePopUpAnimation() {

    }

    /**
     * 消息机制
     */
    public SendMessage() {

    }
    public ReceiveMessage(messagType: string, callback: Function, targer: any) {

    }
}
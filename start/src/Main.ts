//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        var shp1: egret.Shape = new egret.Shape();
        shp1.x = 20;
        shp1.y = 20;
        shp1.graphics.lineStyle(10, 0x00ff00);
        shp1.graphics.beginFill(0xff0000, 1);
        shp1.graphics.drawRect(0, 0, 100, 100);
        shp1.graphics.endFill();
        this.addChild(shp1);

        var shp2: egret.Shape = new egret.Shape();
        shp2.x = 20;
        shp2.y = 20;
        shp2.graphics.beginFill(0xff0000, 1);
        shp2.graphics.drawCircle(200, 200, 200);
        shp2.graphics.endFill();
        this.addChild(shp2);

        var line1: egret.Shape = new egret.Shape();
        line1.graphics.lineStyle(2, 0x00ff00);
        line1.graphics.moveTo(10, 10);
        line1.graphics.lineTo(200, 200);
        line1.graphics.lineTo(30, 30);
        line1.graphics.lineTo(400, 400);
        line1.graphics.lineTo(50, 50);
        line1.graphics.endFill();
        this.addChild(line1);

        var shp3: egret.Shape = this.getSectorProgress();
        this.addChild(shp3)

    }

    private getSectorProgress():egret.Shape {
        var shape:egret.Shape = new egret.Shape();
        var angle:number = 0;
        egret.startTick(function (timeStamp:number):boolean {
            angle += 1;
            changeGraphics(angle);
            angle = angle % 360;
            return true;
        }, this);
        return shape;
        function changeGraphics(angle) {
            shape.graphics.clear();
            shape.graphics.beginFill(0x2980B9);
            shape.graphics.moveTo(50, 50);
            shape.graphics.lineTo(100, 50);
            shape.graphics.drawArc(50, 50, 50, 0, angle * Math.PI / 180, false);
            shape.graphics.lineTo(50, 50);
            shape.graphics.endFill();
        }
    }
}


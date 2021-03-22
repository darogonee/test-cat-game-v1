// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`33001000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020000000000000000000000000000000000010101000000010100000000000000000000000000000000000000000000000002020000000000000000000000000000000000000000000000000001010000000000000000000000000000000000000000000502020101010000000000010101000000000000000000000000000000000000010101000001010100010100000000010100010102020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020000000001010100000000000101010000000000000000000001010100000000000000000000000000010100000000000002020000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000002020000000000000000000000000000000001010100000101010000000000000000000000000000000000000000000000000002020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`, img`
...................................................
...................................................
...................................................
..................222...22.........................
..........................22.......................
.222.....222..................222..222.22....22.22.
...................................................
.....222.....222..........222.............22.......
...................................................
.................222..222..........................
...................................................
...................................................
...................................................
...................................................
...................................................
...................................................
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
